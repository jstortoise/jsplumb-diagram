


(function () {

	
function Run(id,sname){ 
	var id=id;
	var sname=sname
	  $.ajax({ 
	    url: "jsPlumb/update.php?swid=" + id +"&sw_name="+sname, 
	    context: document.body, 
	    success: function(){ 
	      alert('已變更完成名稱:'+sname); 
	    } 
	  }); 
	} 

    jsPlumbToolkit.ready(function () {



        // options for jsPlumb (appearance of connectors)
        var jsPlumbOptions = {
            //Anchor:"Continuous",

 Anchor:["Continuous", { faces:[ "bottom", "top" ] } ],
            Connector: [ "StateMachine", { curviness: 10 } ],
            DragOptions: { cursor: "pointer", zIndex: 2000 },
		
		PaintStyle: { lineWidth: 1, stroke: 'red' ,strokeWidth:3  },
		
            HoverPaintStyle: { stroke: "#FF6600", lineWidth: 3 },
            Endpoints: [
                [ "Dot", { radius: 0.1 } ],
                [ "Dot", { radius: 0.1 } ]
            ],
            EndpointStyle: { fill: "#89bcde",strokeWidth:1 },
            EndpointHoverStyle: { fill: "#FF6600" }
	

        };



var idFunction = function (n) {
            return n.id;
        };

        // This function is what the toolkit will use to get the associated type from a node.
        var typeFunction = function (n) {
            return n.type;
        };

        // get the various dom elements
   
        // get a new jsPlumb Toolkit instance to use.
        var toolkit = window.toolkit = jsPlumbToolkit.newInstance({




autoSave:true,
  saveUrl:"jsPlumb/data/b.json",
headers:{
"Content-Type":"application/json"
  },




onAutoSaveError:function(msg) { 
alert(msg);
 },
onAutoSaveSuccess:function(response) { 
//alert("即時儲存"+response);

//error_log();

var data = jsPlumbToolkit.exportData({
  type:"json"
});
//alert("即時儲存"+data[0]);
},

    	idFunction: idFunction,
            typeFunction: typeFunction,
            nodeFactory: function (type, data, callback) {
                jsPlumbToolkit.Dialogs.show({
                    id: "dlgText",
                    title: "Enter " + type + " name:",
                    onOK: function (d) {
                        data.text = d.text;
                        // if the user entered a name...
                        if (data.text) {
                            // and it was at least 2 chars
                            if (data.text.length >= 2) {
                                // set an id and continue.
                                data.id = jsPlumbToolkitUtil.uuid();
                                callback(data);
                            }
                            else
                            // else advise the user.
                                alert(type + " names must be at least 2 characters!");
                        }
                        // else...do not proceed.
                    }
                });
            },
            beforeStartConnect:function(node, edgeType) {
                // limit edges from start node to 1. if any other type of node, return
                return (node.data.type === "start" && node.getEdges().length > 0) ? false : { label:"..." };
            }


		});


toolkit.save({
  url:"jsPlumb/data/b.json"
})
	//jsPlumbToolkit.updateEdge();
	
jsPlumb.revalidate();	
        // make a random hierarchy
        //var hierarchy = jsPlumbToolkitDemoSupport.randomHierarchy();

//var hierarchy =JSON.parse();


//-----------------------------------編輯------------------------------------------
        jsPlumbToolkit.Dialogs.initialize({
            selector: ".dlg"
        });



//-----------------------------------編輯------------------------------------------



// change a question or action's label
        jsPlumb.on(".jtk-demo-canvas", "tap", ".node-edit", function () {
       
            var info = toolkit.getObjectInfo(this);
            jsPlumbToolkit.Dialogs.show({
                id: "dlgText",
                data: info.obj.data,
                title: "編輯 " + info.id + " 名稱",
                onOK: function (data) {
                    if (data.text && data.text.length > 2) {
                        toolkit.updateNode(info.id, data);
	Run(info.id,data.text);
                    }
                }
            });
        });


        //
        // use event delegation to attach event handlers to
        // remove buttons. This callback finds the related Node and
        // then tells the toolkit to delete it.
        //
        jsPlumb.on(".jtk-demo-canvas", "tap", ".delete", function (e) {
            var info = toolkit.getObjectInfo(this);
            var selection = toolkit.selectDescendants(info.obj, true);
            toolkit.remove(selection);
        });

        //
        // use event delegation to attach event handlers to
        // add buttons. This callback adds an edge from the given node
        // to a newly created node, and then the layout is refreshed.
        //
        jsPlumb.on(".jtk-demo-canvas", "tap", ".add", function (e) {
            // this helper method can retrieve the associated
            // toolkit information from any DOM element.
            var info = toolkit.getObjectInfo(this);
            // get a random node.
            var n = jsPlumbToolkitDemoSupport.randomNode();
            // wrap the node and edge addition in a batch, because the spring layout prefers that all
            // data operations be completed before a refresh of the layout.
            toolkit.batch(function() {
                // add the node to the toolkit
                var newNode = toolkit.addNode(n);
                // and add an edge for it from the current node.
                toolkit.addEdge({source: info.obj, target: newNode});
            });
        });

        // common parameters for each renderer
        var commonParameters = {
            jsPlumb: jsPlumbOptions,
            zoomToFit: true,
wheelReverse:true,

            lassoFilter: ".controls, .controls *, .miniview, .miniview *",
            events: {
                canvasClick: function () {
                    toolkit.clearSelection();
                }
            },
            consumeRightClick: false,
            
	dragOptions: {
                //filter: ".delete *, .add *"
            }
        };

        //
        // create one renderer
        //
        var render = function(id, layoutParams) {
            var selector = "#demo-" + id;
            var r = toolkit.render({
		//container: canvasElement,
                container: "demo-" + id,
	    view: {
                ports:{
                    "default": {
                        maxConnections: 10,
                        uniqueEndpoint: true
                    }
                },

/*
	 layout:{
    type:"Absolute",
    parameters:{
      locationFunction:function(data) {
        var x = "${left}";
        var y = "${top}";
        return [ x, y ];
      }
    }
  },
*/

		  edges:{
                    "default":{
	paintStyle:{strokeWidth:"${cw}",stroke:"${line_color}",dashstyle:"${ct}" },
	hoverPaintStyle: { strokeWidth: 2, stroke: "rgb(67,67,67)" },
                       overlays:[
                      	[ "Label", { label:"${labels}",location:0,cssClass: 'aLabel'}],
	         	[ "Label", { label:"${labelt}",location:-2,cssClass: 'bLabel'}]
                        ],
                    } ,
  type1:{
    parent:"default",
    paintStyle:{stroke:"blue",fill:"none", strokeWidth:2}
  },
  type2:{
    parent:"default",
    paintStyle:{stroke:"#000", fill:"#000", strokeWidth:"2"}
  },


                }},

		
		

           

		                         
                layout: layoutParams,
                miniview: {
                    container: "miniview-" + id
                },
		
                events:{
                    "modeChanged" :function (mode) {
                        jsPlumb.removeClass(jsPlumb.getSelector(selector + " [mode]"), "selected-mode");
                        jsPlumb.addClass(jsPlumb.getSelector(selector + " [mode='" + mode + "']"), "selected-mode");
                    }
                }
            }, commonParameters);

		
		

            // bind event listeners to the mode buttons
            jsPlumb.on(selector, "tap", "[mode]", function () {
                r.setMode(this.getAttribute("mode"));
            });

            // on home button tap, zoom content to fit.
            jsPlumb.on(selector, "tap", "[reset]", function () {
                toolkit.clearSelection();
                r.zoomToFit();
            });
        };





        //
        // renderer specs. keys are ids, values are layout params.
        //
        var rendererSpecs = {
            "hierarchical":{
                type: "Hierarchical",
                parameters: {
                    orientation: "horizontal",
                    padding: [60, 60]
                }
            }        };

        // render each one.
        for (var id in rendererSpecs)
            render(id, rendererSpecs[id]);
toolkit.load({
		url: "data.json"
		});

jsPlumb.registerConnectionType("example", {
  paintStyle:{ stroke:"blue", strokeWidth:5  },
  hoverPaintStyle:{ stroke:"red", strokeWidth:7 }
});
setInterval(function() {
  jsPlumbToolkitUtil.ajax({
   url: "flow.json",
	dataType: "json",
    success:function(DD) {
	var NumOfJData = DD.length;
	for (var i = 0; i < NumOfJData; i++) {
		var id=DD[i]["id"];
		var colora=DD[i]["line_color"];
/*
jsPlumb.connect({
    source:ida,
    target:id,
    //endpointStyle:{ fill:"blue", outlineStroke:"black", outlineWidth:1 },
    paintStyle:{ stroke:"blue", strokeWidth:1 }
});		
*/


toolkit.updateEdge(id, {endpointStyle:{ fill:"blue", outlineStroke:"black", outlineWidth:1 }});
	//toolkit.getEdgeType(idn).setType("example");	
			}

    }
  });
}, 10000);






        var datasetView = new jsPlumbSyntaxHighlighter(toolkit, ".jtk-demo-dataset");
    });
//toolkit.getEdge("w56").setType("type2");

})();


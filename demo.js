jsPlumb.ready(function () {
	


    // setup some defaults for jsPlumb.
    var instance = jsPlumb.getInstance({
        Endpoint: ["Dot", {radius: 2}],
        HoverPaintStyle: {strokeStyle: "red", lineWidth: 2 },
        ConnectionOverlays: [
            [ "Label", {
                location: 1,
                id: "arrow",
                length: 14,
                foldback: 0.8
            } ],
           // [ "Label", { label: "tt", id: "label",  location:-50 ,cssClass: "aLabel" }], //線上定位小視窗
			  	//[ "Label", { label: "tt", id: "label1",  location:-50 ,cssClass: "bLabel" }]//線上字
        ],
        Container: "statemachine-demo"
    });

    window.jsp = instance;

    var windows = jsPlumb.getSelector(".statemachine-demo .w");

    // initialise draggable elements.
    //instance.draggable('disable');
    instance.draggable('WINDOW');
    // bind a click listener to each connection; the connection is deleted. you could of course
    // just do this: jsPlumb.bind("click", jsPlumb.detach), but I wanted to make it clear what was
    // happening.
    instance.bind("click", function (c) {
       // instance.detach(c);
	   console.log(c);
    });

    // bind a connection listener. note that the parameter passed to this function contains more than
    // just the new connection - see the documentation for a full list of what is included in 'info'.
    // this listener sets the connection's internal
    // id as the label overlay's text.
    instance.bind("connection", function (info) {
       // info.connection.getOverlay("label").setLabel('Port');
    }); //小視窗文字


    // suspend drawing and initialise.
    instance.batch(function () {
        instance.makeSource(windows, {
            filter: ".ep",
            anchor: "Continuous",
//            anchor: [ 0, 1, 0, 1, 10, 0 ], 
            connector: [ "Flowchart", { curviness: 20 } ],
//            connectorStyle: { strokeStyle: "green", lineWidth: 5, outlineColor: "transparent", outlineWidth: 4 },
            maxConnections: 5,
            onMaxConnections: function (info, e) {
                alert("Maximum connections (" + info.maxConnections + ") reached");
            }
        });

        // initialise all '.w' elements as connection targets.
        instance.makeTarget(windows, {
            dropOptions: { hoverClass: "dragHover" },
//            anchor: "Continuous",
//            anchor: "TopCenter", 
            allowLoopback: true
        });

        // and finally, make a couple of connections
//        instance.connect({ source: "phone1", target: "opened",detachable:false,anchor: [[ 0, 1, 0, 1, 10, 0]]});
//        instance.connect({ source: "inperson", target: "phone1",detachable:false,anchor: ["AutoDefault"]});
//        instance.connect({ source: "phone1", target: "phone2",detachable:false,anchor: [[ 0, 1, 0, 1, 400, 0]]});
        
    });
	
    instance.connect({source:"L1-SW1",target:"L2-SW0 ",
    	paintStyle:{lineWidth:6,strokeStyle:'green'},
    	endpointStyle:{fillStyle:'green'},
    	endpoint:["Dot",{radius:5}],
        anchors:[[ 0, 1, 0, 0, 50, 0],"Top"],
			overlays:[
		["Label", {label:"1",location: 20,id: 'label',cssClass: 'bLabel'}],
		["Label", {label:"24",location: 1,id: 'label1',cssClass: 'aLabel'}]
		]  
		});
    instance.connect({source:"L1-SW1",target:"L2-SW2",
    	endpoint:["Dot",{radius:5}],
    	paintStyle:{lineWidth:6,strokeStyle:'red'},
  	    endpointStyle:{fillStyle:'red'},
        anchors:["Bottom","Top"],

			overlays:[
		["Label", {label:"3",location: 20,id: 'label',cssClass: 'bLabel'}],
		["Label", {label:"24",location: 1,id: 'label1',cssClass: 'aLabel'}]
		] 
		});
    instance.connect({source:"L1-SW1",target:"L2-SW3",
    	paintStyle:{lineWidth:6,strokeStyle:'green'},
  	    endpointStyle:{fillStyle:'green'},
  	    endpoint:["Dot",{radius:5}],
        anchors:[[ 0, 1, 0, 0, 220, 0],"Top","Perimeter", { shape:"Triangle" } ],
			overlays:[
		["Label", {label:"5",location: 20,id: 'label',cssClass: 'bLabel'}],
		["Label", {label:"24",location: 1,id: 'label1',cssClass: 'aLabel'}]
		] 
		});
    instance.connect({source:"L1-SW1",target:"L2-SW4",
    	paintStyle:{lineWidth:6,strokeStyle:'green'},
  	    endpointStyle:{fillStyle:'green'},
  	    endpoint:["Dot",{radius:5}],
       // anchors:[[ 0, 1, 0, 0, 280, 0],"Top","Perimeter", { shape:"Triangle" } ],
anchors:["Top","Bottom","Perimeter", { shape:"Triangle" } ],
			overlays:[
		["Label", {label:"24",location: 20,id: 'label',cssClass: 'bLabel'}],
		["Label", {label:"1",location: 1,id: 'label1',cssClass: 'aLabel'}]
		] 
		});
    
//    instance.connect({source:"L2-SW1",target:"L3_AP",
//    	paintStyle:{lineWidth:6,strokeStyle:'green'},
//  	    endpointStyle:{fillStyle:'green'},
//        anchors:[[ 0, 1, 0, 0, 0, 0],"Top"],
//			overlays:[
//		["Label", {label:"1",location: 20,id: 'label',cssClass: 'bLabel'}],
//		["Label", {label:"24",location: 1,id: 'label1',cssClass: 'aLabel'}]
//		] 
//		});
    instance.connect({source:"L2-SW1",target:"L3-SW1",
    	paintStyle:{lineWidth:6,strokeStyle:'green'},
  	    endpointStyle:{fillStyle:'green'},
  	  endpoint:["Dot",{radius:5}],
        anchors:["Bottom","Top"],
			overlays:[
		["Label", {label:"2",location: 20,id: 'label',cssClass: 'bLabel'}],
		["Label", {label:"24",location: 1,id: 'label1',cssClass: 'aLabel'}]
		]
		});
    
    
//    instance.connect({source:"L2-SW3",target:"L3_SW1",
//    	paintStyle:{lineWidth:6,strokeStyle:'green'},
//  	    endpointStyle:{fillStyle:'green'},
//  	    
//        anchors:[[ 0, 1, 0, 0, 120, 0],"Top"],
//			overlays:[
//		["Label", {label:"1",location: 20,id: 'label',cssClass: 'bLabel'}],
//		["Label", {label:"24",location: 1,id: 'label1',cssClass: 'aLabel'}]
//		]
//		});
    instance.connect({source:"L1-SW1",target:"L1_SW2",
    	paintStyle:{lineWidth:6,strokeStyle:'green'},
  	    endpointStyle:{fillStyle:'green'},
  	    endpoint:["Dot",{radius:5}],
        anchors:["Right","Left"],
			overlays:[
		["Label", {label:"10",location: 20,id: 'label',cssClass: 'bLabel'}],
		["Label", {label:"1",location: 1,id: 'label1',cssClass: 'aLabel'}]
		]
		});


    jsPlumb.fire("jsPlumbDemoLoaded", instance);

});

/**
 * This is just a collection of utility methods used by the jsPlumb Toolkit demos to get random datasets for
 * demo purposes.
 */
(function () {

    window.jsPlumbToolkitDemoSupport = {
        randomHierarchy: function () {
		var jj ='
		{
    "nodes": [
        {
            "id": "w1",
            "name": "1",
            "w": 64,
            "h": 47,
            "left": 0,
            "top": 0
        },
        {
            "id": "w20",
            "name": "20",
            "w": 42,
            "h": 55,
            "left": 0,
            "top": 489
        },
        {
            "id": "w23",
            "name": "23",
            "w": 50,
            "h": 54,
            "left": 364,
            "top": 489
        },
        {
            "id": "w24",
            "name": "24",
            "w": 55,
            "h": 59,
            "left": 494,
            "top": 489
        },
        {
            "id": "w21",
            "name": "21",
            "w": 34,
            "h": 33,
            "left": 122,
            "top": 489
        },
        {
            "id": "w22",
            "name": "22",
            "w": 48,
            "h": 47,
            "left": 236,
            "top": 489
        },
        {
            "id": "w13",
            "name": "13",
            "w": 53,
            "h": 44,
            "left": 304,
            "top": 252
        },
        {
            "id": "w18",
            "name": "18",
            "w": 72,
            "h": 29,
            "left": 304,
            "top": 371
        },
        {
            "id": "w19",
            "name": "19",
            "w": 71,
            "h": 38,
            "left": 456,
            "top": 371
        },
        {
            "id": "w14",
            "name": "14",
            "w": 66,
            "h": 28,
            "left": 437,
            "top": 252
        },
        {
            "id": "w17",
            "name": "17",
            "w": 76,
            "h": 55,
            "left": 148,
            "top": 371
        },
        {
            "id": "w16",
            "name": "16",
            "w": 68,
            "h": 32,
            "left": 0,
            "top": 371
        },
        {
            "id": "w15",
            "name": "15",
            "w": 51,
            "h": 39,
            "left": 583,
            "top": 252
        },
        {
            "id": "w2",
            "name": "2",
            "w": 59,
            "h": 52,
            "left": 144,
            "top": 0
        },
        {
            "id": "w10",
            "name": "10",
            "w": 43,
            "h": 41,
            "left": 534,
            "top": 131
        },
        {
            "id": "w12",
            "name": "12",
            "w": 73,
            "h": 39,
            "left": 151,
            "top": 252
        },
        {
            "id": "w11",
            "name": "11",
            "w": 71,
            "h": 45,
            "left": 0,
            "top": 252
        },
        {
            "id": "w6",
            "name": "6",
            "w": 43,
            "h": 29,
            "left": 0,
            "top": 131
        },
        {
            "id": "w9",
            "name": "9",
            "w": 49,
            "h": 51,
            "left": 405,
            "top": 131
        },
        {
            "id": "w8",
            "name": "8",
            "w": 77,
            "h": 26,
            "left": 248,
            "top": 131
        },
        {
            "id": "w7",
            "name": "7",
            "w": 45,
            "h": 25,
            "left": 123,
            "top": 131
        },
        {
            "id": "w3",
            "name": "3",
            "w": 68,
            "h": 28,
            "left": 283,
            "top": 0
        },
        {
            "id": "w5",
            "name": "5",
            "w": 37,
            "h": 51,
            "left": 581,
            "top": 0
        },
        {
            "id": "w4",
            "name": "4",
            "w": 70,
            "h": 29,
            "left": 431,
            "top": 0
        }
    ],
    "edges": [
        {
            "source": "w1",
            "target": "w2",
            "data": {
                "id": "6438d07d34d"
            }
        },
        {
            "source": "w1",
            "target": "w13",
            "data": {
                "id": "3b47e22f04d"
            }
        },
        {
            "source": "w1",
            "target": "w20",
            "data": {
                "id": "b3f0d17e870"
            }
        },
        {
            "source": "w20",
            "target": "w21",
            "data": {
                "id": "7410cd44a12"
            }
        },
        {
            "source": "w20",
            "target": "w23",
            "data": {
                "id": "20e23f23381"
            }
        },
        {
            "source": "w23",
            "target": "w24",
            "data": {
                "id": "ceb90604568"
            }
        },
        {
            "source": "w21",
            "target": "w22",
            "data": {
                "id": "1ac132f375b"
            }
        },
        {
            "source": "w13",
            "target": "w14",
            "data": {
                "id": "47d4162e01a"
            }
        },
        {
            "source": "w13",
            "target": "w18",
            "data": {
                "id": "1ca23cf4a09"
            }
        },
        {
            "source": "w18",
            "target": "w19",
            "data": {
                "id": "a45e1729928"
            }
        },
        {
            "source": "w14",
            "target": "w15",
            "data": {
                "id": "58b6b4d7c59"
            }
        },
        {
            "source": "w14",
            "target": "w16",
            "data": {
                "id": "7bca489fbe6"
            }
        },
        {
            "source": "w14",
            "target": "w17",
            "data": {
                "id": "96feec38210"
            }
        },
        {
            "source": "w2",
            "target": "w3",
            "data": {
                "id": "b6bb5c84334"
            }
        },
        {
            "source": "w2",
            "target": "w6",
            "data": {
                "id": "5a4cacaa04b"
            }
        },
        {
            "source": "w2",
            "target": "w10",
            "data": {
                "id": "cf59fa776a8"
            }
        },
        {
            "source": "w10",
            "target": "w11",
            "data": {
                "id": "a1b54e2219b"
            }
        },
        {
            "source": "w10",
            "target": "w12",
            "data": {
                "id": "2ecb59c9f43"
            }
        },
        {
            "source": "w6",
            "target": "w7",
            "data": {
                "id": "34b4e8135d3"
            }
        },
        {
            "source": "w6",
            "target": "w8",
            "data": {
                "id": "716e87013cb"
            }
        },
        {
            "source": "w6",
            "target": "w9",
            "data": {
                "id": "68554cfe136"
            }
        },
        {
            "source": "w3",
            "target": "w4",
            "data": {
                "id": "00514b748af"
            }
        },
        {
            "source": "w3",
            "target": "w5",
            "data": {
                "id": "3c569586c06"
            }
        }
    ],
    "ports": [],
    "groups": []
}';


            
            return jj;
        }
    };

})();
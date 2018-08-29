document.querySelector('.js-normal').addEventListener('click', function () {
    location.search = '';
});
document.querySelector('.js-huge').addEventListener('click', function () {
    location.search = 'huge';
});

function getHugeMap() {
    return `
                                                                                                         2222222                                               
                                                                                                   2222222222222                                               
                                                                                                2222222222222222                                               
                                                                                             222222222222222222                                                
                                                                                          222222222222222222222                                                
                                                                                        22222222222222222222222                                                
                                                                                       22222222222222222222222                                                 
                                                                                     222222222222222222222222                                                  
                                                                                    2222222222222222222222222                                                  
                                                                                   2222222222222222222222222                                                   
                                                                                  2222222222222222222222222                                                    
                                                                                 222222222222222222222222                                                      
                                                                                222222222222222222222222                                                       
                                                                                2222222222222222222222                                                         
                                                                               222222222222222222222                                                           
                                                                               2222222222222222222                                                             
                                                                               2222222222222222                                                                
                                                                               222222222222                                                                    
                                                                               22222                                                                           
                                                   1111111                                            11111111111111                                           
                                          111111111111111111111111                             11111111111111111111111111111                                   
                                     1111111111111111111111111111111111                   11111111111111111111111111111111111111                               
                                  1111111111111111111111111111111111111111111       11111111111111111111111111111111111111111111111                            
                               1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                         
                             11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                       
                           111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                     
                         1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                   
                       111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                   
                      1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                      
                     111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                        
                    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                          
                   1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                            
                  1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                             
                 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                               
                 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                
                11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                 
                11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                 
               11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                  
               1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                   
               1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                   
              11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                   
              1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                    
              1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                    
              1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                    
              11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                   
              11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                   
              11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                   
               11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                  
               111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                 
               111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                 
               1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                               
                111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                             
                 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                            
                 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                          
                  111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                        
                  111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                     
                   11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                  
                   11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111               
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111               
                     111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111               
                      1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                
                       11111111111111111111111111111111111111111111111111111000000000000000000000000000000000000000000000000000000000000000000                 
                        000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                  
                         0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                   
                          00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                    
                           000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                     
                            0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                      
                             00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                       
                              000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                        
                                00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                          
                                 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                           
                                   00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                             
                                    000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                              
                                      000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                               
                                       000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                                 
                                         00000000000000000000000000000000000000000000000000000000000000000000000000000000000                                   
                                            000000000000000000000000000000                 0000000000000000000000000000000                                     
                                              0000000000000000000000                             0000000000000000000000                                        
`.slice(1).slice(0, -1).split('\n').map(row => row.split(''));
}

function getNormalMap() {
    return Array(30).fill(Array(30).fill('1'));    
}

function getRandomState() {
    return [
        'sunbed-check-in',
        'sunbed-check-in',
        'sunbed-check-in',
        // 'sunbed-need-waitress',
        'sunbed-booked',
        'sunbed-booked',
        // 'sunbed-waiting',
        'sunbed-unavailable',
        'sunbed-available',
        'sunbed-available',
        'sunbed-available',
        'sunbed-available',
    ][Math.floor(Math.random() * 10)];
}

function getSunbeds() {
    var sunbeds = [];
    var isHuge = location.search === '?huge';

    (isHuge ? getHugeMap() : getNormalMap())
    .forEach(function (row, y) {
        row.forEach(function (state, x) {
            var isEmpty = state === ' ';
            var isActive = state !== '0' && state !== ' ';

            if (!isEmpty) {
                sunbeds.push({
                    x: x,
                    y: y,
                    type: state,
                    id: 1000 + sunbeds.length,
                    state: isActive ? getRandomState() : 'sunbed-add',
                });
            }
        });
    });

    return sunbeds;
}



var resolution = 2 || window.devicePixelRatio;

PIXI.settings.SCALE_MODE = 1;

var app = window.app = new PIXI.Application({
    transparent: true,
    resolution: resolution,
    roundPixels: true,
//     forceFXAA: true,
    width: window.innerWidth,
    height: window.innerHeight - 120,
    autoResize: true,
//     forceCanvas: true,
});
document.getElementById('map').appendChild(app.view);

var scale = 1;


var mult = 1;
var map = window.map = new PIXI.Container();
app.stage.position.set(app.renderer.width / 2 / resolution, app.renderer.height / 2 / resolution);
// app.stage.scale.set(scale);
// map.position.x = -app.renderer.width;
// map.position.y = -app.renderer.height;


function zoom(t) {
    scale = (scale += scale * t * 0.1) < .01 ? .01 : scale > 1 / mult ? 1 / mult : scale;
    app.stage.scale.set(scale);
}

document.addEventListener('mousewheel', function (e) {
    e.preventDefault();

    if (e.deltaY < 0) {
        zoom(1);
    } else if (e.deltaY > 0) {
        zoom(-1);
    }
});

var hammer = new Hammer(document.getElementById('map'), { domEvents: true });
hammer.get('pinch').set({
    enable: true,
    pointers: 2,
});

$('#map').on('pinch', function (e) {
    var t = e.originalEvent.gesture.scale;
    scale = (scale *= (1 + Math.log10(t) * .5 / resolution)) < .05 ? .05 : scale > 1 / mult ? 1 / mult : scale;
    app.stage.scale.set(scale);
});

var sunbedClickDisabled = false;

function addText(img) {
    var text = new PIXI.Text(img.id, {fontFamily : 'Arial', fontSize: 14, fill : 0x000000, align : 'center'});
    text.anchor.set(0.5, 0.5);
    text.position.x = img.x;
    text.position.y = img.y;
    img.text = text;
    map.addChild(text);
} 

PIXI
    .loader
    .add('beach', '../images/beach.jpg')
    .add('sunbed-check-in', '../images/sunbed-check-in.png')
    .add('sunbed-add', '../images/sunbed-add.png')
    // .add('sunbed-need-waitress', '../images/sunbed-need-waitress.png')
    .add('sunbed-booked', '../images/sunbed-booked.png')
    // .add('sunbed-waiting', '../images/sunbed-waiting.png')
    .add('sunbed-available', '../images/sunbed-available.png')
    .add('sunbed-checked', '../images/sunbed-checked.png')
    .add('sunbed-unavailable', '../images/sunbed-unavailable.png')
    .add('silver', '../images/silver.png')
    .load(function render(loader, resources) {
        var beach = window.beach = new PIXI.Sprite(resources['beach'].texture);
        map.addChild(beach);

         getSunbeds().forEach(function (data) {
            var img = new PIXI.Sprite(resources[data.state].texture);
            img.id = data.id;
            img.state = data.state;
            img.anchor.set(.5, .5);
//             if (data.type === '2') {
                img.rotation = Math.PI / 6 * Math.round(Math.random() - 0.3);
//             }

            img.x = data.x * 80 * mult;
            img.y = data.y * 150 * mult;
            img.width = 45 * mult;
            img.height = 90 * mult;

            img.interactive = true;
            img.on('pointertap', function (e) {
                if (!sunbedClickDisabled) {
                    this.state = {
                        'sunbed-available': 'sunbed-checked',
                        'sunbed-checked': 'sunbed-available',
                        'sunbed-check-in': 'sunbed-booked',
                        'sunbed-booked': 'sunbed-check-in',
                        'sunbed-add': 'sunbed-available',
                    }[this.state] || this.state;

                    addText(this);
                    
                    this.texture = resources[this.state].texture;
                }
            });
            img.on('pointerover', function (e) {
                this.alpha = .8;             
            });
            img.on('pointerout', function (e) {
                this.alpha = 1;
            });
            
            map.addChild(img);
            

            
        });
        app.stage.addChild(map);

        beach.width = map.width * 1.1;
        beach.x = 0;
        beach.y = -map.height / 10;
        beach.height = map.height * 1.1;
        beach.alpha = .3;


        window.degradate = function () {
            map.children.forEach(sunbed => {
                if (sunbed.state) {
                    sunbed.texture = resources['silver'].texture;
                    sunbed.alpha = .5;
                }
            });
        }

        window.undegradate = function () {
            map.children.forEach(sunbed => {
                if (sunbed.state) {
                    sunbed.texture = resources[sunbed.state].texture
                    sunbed.alpha = 1;
                }
            });
        }


        

        map.position.x = -app.stage.width / 2 - app.renderer.width / 2;
        map.position.y = -app.stage.height / 2 - app.renderer.height / 2;
//         map.hitArea = new PIXI.Rectangle(0, 0, map.width, map.height);
        map.hitArea = new PIXI.Rectangle(-map.width / 2, -map.height / 2, map.width * 2, map.height * 2);

        map.interactive = true;
        map.buttonMode = true;

        map
            .on('pointerdown', function (t) {
                this.data = t.data;
                this.start_data = {
                    x: t.data.originalEvent.screenX,
                    y: t.data.originalEvent.screenY
                };
                this.dragPos = this.data.getLocalPosition(this.parent);
                this.oldPosition = new PIXI.Point();
                this.oldPosition.copy(this.position);
                if (this.dragging) {
                    this.dragging = false;
                    sunbedClickDisabled = true;
                } else {
                    this.dragging = true;
                }
            })
            .on('pointerup', function (t) {
                var e = t.data.originalEvent;
                this.start_data && (Math.abs(this.start_data.x - e.screenX) > 2 || Math.abs(this.start_data.y - e.screenY) > 2) && t.stopPropagation();
                this.dragging = false;
                this.data = null;
                sunbedClickDisabled = false;
            })
            .on('pointerupoutside', function (t) {
                var e = t.data.originalEvent;
                this.start_data && (Math.abs(this.start_data.x - e.screenX) > 2 || Math.abs(this.start_data.y - e.screenY) > 2) && t.stopPropagation();
                this.dragging = !1;
                this.data = null;
            })
            .on('pointermove', function () {
                if (this.dragging) {
                    
                    var t = this.data.getLocalPosition(this.parent);
                    var e = map.position;
                    var r = this.oldPosition;
                    if (Math.sqrt((e.x - r.x)*(e.x - r.x) + (e.y - r.y)*(e.y - r.y)) > 10) {
                        sunbedClickDisabled = true;
                    }
                    e.x = r.x + (t.x - this.dragPos.x);
                    e.y = r.y + (t.y - this.dragPos.y);
                }
            });
        
    });

function Button($root, svgId) {
    return $('<a>', {
        href: 'javascript:void(0)',
        html: '<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#' + svgId + '"></use></svg>'
    }).addClass('map-zoom map-' + svgId).appendTo($root);
}

function smoothZoom(type) {
    var direction = type === 'in' ? 1 : -1;
    var mult = .5;

    return function () {
        var i = 10;
        window.requestAnimationFrame(function _zoom() {
            if (i--) {
                zoom(mult * direction);
                window.requestAnimationFrame(_zoom);
            }
        });
    };
}

Button('#map', 'zoom-in').click(smoothZoom('in'));
Button('#map', 'zoom-out').click(smoothZoom('out'));



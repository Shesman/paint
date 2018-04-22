var data = {
    canvas: undefined,
    context: undefined,
    svg: undefined,
    drawing: undefined,
    color: undefined,
    states: [],
    anim: []  // createDrawing()
};

var mouse = {
    clickX: [],
    clickY: [],
    paint: undefined,
    select: undefined,
    vertice: [], //[<img>, posX, posY]
    polygon: [],
    move: false,
    idVertice: 0
};

/**
 * @param {[string]} operation [ point/line/triangle/rectangle/polygon/star/select ]
 * @param {any[]} vertice [ Array of vertices, a vertex is [DOM <img>, posX, posY] ]
 * @param {[object]} svg [ DOM <line/polygon/polyline> ]
 */
function createDrawing(operation, vertice, svg) {
    var drawing = {
        type: operation,
        vertices: vertice, //[<img>, posX, posY]
        svg: svg,
        numVertice: getNumVertice(operation)
    };

    return drawing;
}

/**
 * [Return object (drawing) and indices of vertex position, in a array]
 * @param {[string]} idVertice 
 */
function findVertice(idVertice) { // type _ anim.lenght-1 _ vertice.lenght
    var ret = [];
    if (data.anim[Number(idVertice.split("_")[1])] == undefined)
        return;
    ret.push(data.anim[Number(idVertice.split("_")[1])]);
    ret.push(Number(idVertice.split("_")[1]));
    ret.push(Number(idVertice.split("_")[2])-1);
    return ret;
}

/**
 * @param {[string]} idPolygon 
 * @return [Return object (drawing) and indice of polygon position, in a array]
 */
function findPolygon(idPolygon) {
    
    var ret = [];
    if (data.anim[Number(idPolygon.split("_")[1])-1] != undefined){
        ret.push(data.anim[Number(idPolygon.split("_")[1])-1]);
        ret.push(Number(idPolygon.split("_")[1])-1);
        return ret;
    }
}
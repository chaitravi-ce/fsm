function table(){
    var presentState = []
    var nextState = []
    for(i=0;i<links.length;i++){
        end = links[i].node.text
        nextState.push(end)
        if(links[i].startNode != null){
            start = links[i].startNode.text
            presentState.push(start)
        }else{
            presentState.push(end)
        }
    }
    console.log(presentState)
    console.log(nextState)
}
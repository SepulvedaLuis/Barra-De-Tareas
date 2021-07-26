class TaskManager {
    tasks = [];
    lastId = 0;
    tagTasks = null;
    tagText = null;

    nameLabelStorage = "tasks";

    constructor(tagTasks, tagText){
        
        this.tagTasks = tagTasks;
        this.tagText = tagText;
        // console.log("Hola existo");
    }

    add(){
        this.lastId++;
        this.tasks.push({id: this.lastId, text: this.tagText.value});
        
        localStorage.setItem(this.nameLabelStorage, JSON.stringify(this.tasks));

        console.log("Estamos funcionando");
        console.log(this.tasks);
    }
}
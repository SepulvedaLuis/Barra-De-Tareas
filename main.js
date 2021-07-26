class tasKManager {
    task = [];
    lastId = 0;
    tagTasks = null;
    tagText = null;

    nameLabelStorage = "tasks";

    constructor(tagTasks, tagText){
        
        this.tagTasks = tagTasks;
        this.tagText = tagText;

    }
}
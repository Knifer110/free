var RegisterNote = /** @class */ (function () {
    function RegisterNote() {
        console.log("create Instance");
    }
    RegisterNote.getInstance = function () {
        return RegisterNote.registerNote;
    };
    RegisterNote.registerNote = new RegisterNote();
    return RegisterNote;
}());
console.log("Start");
var note1 = RegisterNote.getInstance();
var note2 = RegisterNote.getInstance();
if (note1 === note2) {
    console.log("same");
}
else {
    console.log("diff");
}
console.log("End");

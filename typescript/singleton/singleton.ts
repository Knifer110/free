class RegisterNote {
  private static registerNote: RegisterNote = new RegisterNote();
  private constructor() {
    console.log("インスタンスを生成しました。");
  }
  public static getInstance(): RegisterNote {
    return this.registerNote;
  }
}
console.log("Start.");
const note1: RegisterNote = RegisterNote.getInstance();
const note2: RegisterNote = RegisterNote.getInstance();
//const note3: RegisterNote = new RegisterNote();
/*
                    ***note3のコメントアウトを外すと以下のエラーが出る
                    singleton.ts:14:29 - error TS2673: Constructor of class 'RegisterNote' is private and only accessible within the class declaration.
                    ​
                    14 const note3: RegisterNote = new RegisterNote();
                    ***終了
                    */
if (note1 === note2) {
  console.log("同じインスタンスです。");
} else {
  console.log("違うインスタンスです。");
}
console.log("End.");
/*
                        ***実行結果
                        インスタンスを生成しました。
                        Start.
                        同じインスタンスです。
                        End.
                        ***終了
                        */

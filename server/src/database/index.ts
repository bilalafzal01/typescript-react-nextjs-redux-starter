interface todoData {
  id: number;
  content: string;
}

export default class DataBase {
  private _todoDatas: todoData[];
  private _id: number;

  constructor(todoDatas: todoData[]) {
    this._todoDatas = todoDatas;
    this._id = todoDatas.length - 1;
  }

  get todoDatas() {
    return [...this._todoDatas].reverse();
  }

  insert(content: string) {
    this._checkIsContentNull(content);
    const addedIdTodoData = this._makeAddedIdTodoData(content);
    this._todoDatas.push(addedIdTodoData);
    return this._todoDatas[this._todoDatas.length - 1];
  }

  delete(id: number) {
    this._checkIsDataExists(id);

    for (let i = 0; i < this._todoDatas.length; i++) {
      if (this._todoDatas[i].id === id) {
        this._todoDatas = this._todoDatas
          .slice(0, i)
          .concat(this._todoDatas.slice(i + 1));
        break;
      }
    }

    return id;
  }

  private _makeAddedIdTodoData(content: string) {
    return { id: ++this._id, content };
  }

  private _checkIsContentNull(content: string) {
    if (content.trim().length <= 0) throw Error("Content is not allowed null");
  }

  private _checkIsDataExists(id: number) {
    const isDataExists = this._todoDatas.findIndex(
      todoData => todoData.id === id
    );
    if (isDataExists < 0) throw Error("Deleted data is out of existance");
  }
}

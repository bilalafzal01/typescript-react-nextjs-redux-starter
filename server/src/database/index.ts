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
    if (content.trim().length <= 0) throw Error("Content is not allowed null");
    this._todoDatas.push({ id: ++this._id, content });
    return this._id;
  }

  delete(id: number) {
    const isExistIndex = this._todoDatas.findIndex(data => data.id === id);
    if (isExistIndex < 0) throw Error("Deleted data is out of existance");

    for (let i = 0; i < this._todoDatas.length; i++) {
      if (this._todoDatas[i].id === id)
        this._todoDatas = this._todoDatas
          .slice(0, i)
          .concat(this._todoDatas.slice(i + 1));
      break;
    }

    // this._todoDatas = this._todoDatas.filter(data => data.id !== id);
    return id;
  }
}

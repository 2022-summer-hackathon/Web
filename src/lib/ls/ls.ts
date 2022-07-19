class LS {
  public getItem(key: string): string | null {
    let item = null;
    if (localStorage.getItem(key)) {
      item = localStorage.getItem(key);
    }
    return item;
  }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clearItem(): void {
    localStorage.clear();
  }
}

export default new LS();

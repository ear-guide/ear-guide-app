export default class ElementUtil {
  public static compareLevel(a: string, b: string) {
    const levelA = this.getLevel(a);
    const levelB = this.getLevel(b);

    return levelA && levelB
      ? levelA - levelB
      : levelA
        ? -1
        : levelB
          ? 1
          : 0;
  }

  private static getLevel(tag: string) {
    return tag.charAt(0) === 'h'
      ? +tag.charAt(1)
      : undefined;
  }
}

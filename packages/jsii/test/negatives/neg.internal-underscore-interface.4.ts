///!MATCH_ERROR: members with names that begin with an underscore must be marked as @internal via a JSDoc tag

export class MyClass {
  public _methodWithUnderscoreButNoInternal() {
    return;
  }
}

// Task
// You will be defining a class File
// Your File class should exhibit the following behaviour:

// Constructor
// Your constructor should accept two arguments in the following order: fullName and contents, where fullName is the full name of the file (including file extension) and contents is the file contents.

// An instance of your File class should exhibit the following behaviour:

// fullName (property)
// Should contain the full name of the file, including the file extension. Please note that the fullName property should be read-only, which means that attempts to reassign fullName a new value should fail and it should retain its original value.
// filename (property)
// Should contain the name of the file, excluding the file extension. Should also be read-only which means reassignment attempts should fail. 
// extension (property)
// Should contain the file extension. Read-only
// getContents (method)
// Should return the contents of the file every time.
// write (method)
// Should accept exactly 1 argument str, the new content to be written to the file. The new content should be written on a new line on the file.
// gets (method)
// Returns a line on the file, starting on Line 1. Successive calls to the method should return successive lines on the file. If the number of calls exceeds the number of lines on the file, simple return undefined.
// getc (method)
// Should return a character on the file, starting from the first character. Successive calls should return successive characters on the file. If the number of calls exceeds the number of characters on the file, it should simply return undefined.

class File {
  constructor(fullName, contents){
    const fullNameArr = fullName.split('.');
    const fileNameArr = fullNameArr.filter((el)=> i !== fullNameArr.length-1);
      
    this._fullName = fullName;
    this._filename = fileNameArr.join('.');
    this._contents = contents;
    this._extension = fullNameArr[fullNameArr.length-1];
    
    this._currentLineToRead = 0;
    this._currentCharToRead = 0;
  }
  get fullName(){
    return this._fullName;
  }

  get filename(){
    return this._filename;
  }
    
  get extension(){
    return this._extension;
  }

  getContents(){
    return this._contents;
  }
  write(str){
    this._contents = `${this._contents.length ? this._contents + '\n' : ''}${str}`
  }
  gets(){
    const res = this._contents.split('\n')[this._currentLineToRead];
    this._currentLineToRead++;
    return res;
  }
  getc(){
    const res = this._contents[this._currentCharToRead];
    this._currentCharToRead++;
    return res;
  }
}
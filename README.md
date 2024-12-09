# vscode-wikipedia-hyperlink

 Adds a hyperlink to a wikipedia article for the currently selected text in a markdown or html file

---

## Notes

Fork of [https://github.com/wasi-master/vscode-wikipedia-hyperlink/](https://github.com/wasi-master/vscode-wikipedia-hyperlink/) because I didn't want the link summary. 

I made a comment on the upstream original asking the author to consider it an option ( e.g. [https://github.com/wasi-master/vscode-wikipedia-hyperlink/discussions/2](https://github.com/wasi-master/vscode-wikipedia-hyperlink/discussions/2) ). 

I modified the extension ID to leave the original available to if the option comes available and installed a package to publish a .VSIX file so that I could sync it with codepaces.


```sh
// to build

"scripts": {
  "vscode:prepublish": "npm run package",
  "compile": "webpack",
  "watch": "webpack --watch",
  "package": "webpack --mode production --devtool hidden-source-map",
  "compile-tests": "tsc -p . --outDir out",
  "watch-tests": "tsc -p . -w --outDir out",
  "pretest": "npm run compile-tests && npm run compile && npm run lint",
  "lint": "eslint src --ext ts",
  "test": "node ./out/test/runTest.js"
},


// to publish
npm install -g vsce 
vsce package
vsce publish
```
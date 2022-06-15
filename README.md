# vscode-wikipedia-hyperlink

 Adds a hyperlink to a wikipedia article for the currently selected text in a markdown or html file

![Screenshot](https://raw.githubusercontent.com/wasi-master/vscode-wikipedia-hyperlink/main/screenshot.gif)

(WIP)

---

## Notes

I made this fork because I didn't want the link summary clogging up my markdown documents. I made a comment on the upstream original asking the author to consider it an option ( e.g. [https://github.com/wasi-master/vscode-wikipedia-hyperlink/discussions/2](https://github.com/wasi-master/vscode-wikipedia-hyperlink/discussions/2) ). Had to modify the extension ID to leave the original available to if the option comes available. Also had to install a package to publish a .VSIX file to install the extension.
```
npm install -g vsce 
vsce package
```
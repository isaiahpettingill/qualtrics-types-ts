# qualtrics-types-ts
Unofficial typescript declarations for Qualtrics Survey JavaScript API.

This is nice for building complex custom questions either in TypeScript or JavaScript and enabling intellisense for Qualtrics object.

To use, run `npm i --save-dev qualtrics-types-unofficial @types/jquery` and set your jsconfig (or tsconfig) to include the types.

```json
{
    "compilerOptions": {
      "types": ["jquery", "qualtrics-types-unofficial"]
    }
  }
```

Then your intellisense should detect options for the [Qualtrics JS API](https://api.qualtrics.com/82bd4d5c331f1-qualtrics-java-script-question-api-class). 


You can then call API methods in typechecked JS or TS.
```js
Qualtrics.SurveyEngine.addOnload(function () {
    const qualtricsInstance = this; 
    qualtricsInstance.setJSEmbeddedData("MY_FIELD", "Hello World!");
}
```
  
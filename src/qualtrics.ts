declare namespace Qualtrics {
    namespace SurveyEngine {
      // Global page‐level methods (to be called in your addOnload, addOnReady, etc.)
      function addOnload(callback: (this: Qualtrics.SurveyEngine.QuestionData) => void): void;
      function addOnReady(callback: (this: Qualtrics.SurveyEngine.QuestionData) => void): void;
      function addOnPageSubmit(callback: (type?: "jump" | "next" | "prev") => void): void;
      function addOnUnload(callback: (this: Qualtrics.SurveyEngine.QuestionData) => void): void;
  
      /**
       * @deprecated Use setJSEmbeddedData() instead.
       */
      function addEmbeddedData(key: string, value: string): void;
      /**
       * @deprecated Use setJSEmbeddedData() instead.
       */
      function setEmbeddedData(key: string, value: string): void;
  
      /**
       * Sets embedded data on the page.
       * The data is stored with a __js_ prefix. To reference it in piped text or survey flow, use "__js_" + key.
       *
       * @param key Embedded data key.
       * @param value Embedded data value.
       */
      function setJSEmbeddedData(key: string, value: string): void;
  
      /**
       * Gets embedded data from the page.
       * The search will look for the field with a __js_ prefix.
       *
       * @param key Embedded data key.
       * @returns The embedded data value.
       */
      function getJSEmbeddedData(key: string): string;
  
      /**
       * Global object containing all question information on the page.
       * Each key is a question id mapped to a QuestionInfo object.
       */
      var QuestionInfo: {
        [questionId: string]: QuestionInfo;
      };
  
      namespace QuestionData {
        /**
         * Returns the instance of the QuestionData for the given question id.
         *
         * @param questionId The question id (e.g. "QID2")
         * @returns The QuestionData instance.
         */
        function getInstance(questionId: string): QuestionData;
      }
  
      /**
       * Contains basic information about a question.
       */
      interface QuestionInfo {
        QuestionID: string;
        QuestionText: string;
        QuestionType: string;
        Choices: {
          [choiceId: string]: {
            RecodeValue: string;
            VariableName: string;
            Text: string;
            Exclusive: boolean;
          };
        };
      }
  
      /**
       * The QuestionData class is instantiated by Qualtrics when your code is run within an
       * addOnload() call. Its methods allow you to interact with the current question.
       */
      class QuestionData {
        // Properties
        questionId: string;
        questionContainer: HTMLElement;
  
        // An event handler property; assign a function to handle clicks on the question.
        questionclick: (event: Event, element: HTMLElement) => void;
  
        // Navigation methods
        clickNextButton(): void;
        clickPreviousButton(): void;
        disableNextButton(): void;
        disablePreviousButton(): void;
        enableNextButton(): void;
        enablePreviousButton(): void;
        showNextButton(): void;
        showPreviousButton(): void;
        hideNextButton(): void;
        hidePreviousButton(): void;
  
        // Answer and choice accessors
        getAnswers(): string[];
        getChoiceAnswerValue(choiceId: string, answerId: string, subId: string): string;
        getChoiceContainer(): HTMLElement;
        getChoiceDisplayed(choiceId: string, answerId: string, subId: string): boolean;
        getChoiceRecodeValue(choiceId: string): string;
        getChoices(): string[];
        getChoicesFromRecodeValue(recodeVal: string): string[];
        getChoicesFromVariableName(varName: string): string[];
        getChoiceValue(choiceId: string, subId?: string): string;
        getChoiceVariableName(choiceId: string): string;
  
        // Embedded data via the JS API (local to page)
        getJSEmbeddedData(key: string): string;
        setJSEmbeddedData(key: string, value: string): void;
  
        // Other question-specific methods
        getPostTag(): string | null;
        getQuestionContainer(): HTMLElement;
        getQuestionDisplayed(): boolean;
        getQuestionInfo(): QuestionInfo | null;
        getQuestionTextContainer(): HTMLElement;
        getSelectedAnswers(): string[];
        getSelectedAnswerValue(choiceId: string): string;
        getSelectedChoices(): string[];
        getTextValue(opt_choiceId?: string): string;
        hideChoices(): void;
  
        // Methods to set values for choices/answers
        setChoiceAnswerValue(choiceId: string, answerId: string, value: string): boolean;
        setChoiceValue(choiceId: string, value: string): void;
        setChoiceValue(choiceId: string, subId: string, value: string): void;
        setChoiceValueByRecodeValue(recodeValue: string, value: string): void;
        setChoiceValueByRecodeValue(recodeValue: string, subId: string, value: string): void;
        setChoiceValueByVariableName(variableName: string, value: string): void;
        setChoiceValueByVariableName(variableName: string, subId: string, value: string): void;
  
        /**
         * @deprecated Use setJSEmbeddedData() instead.
         */
        setEmbeddedData(key: string, value: string): void;
      }
    }
  }
  
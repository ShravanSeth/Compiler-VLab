export const programs = {
    iscomment: {
        link: 'iscomment',
        aim: 'To check if a given input is a comment or not',
        programName: 'Is Comment?',
        title: 'Is Comment?',
        description: 'To check if a given input is a comment or not',
        theoryTitle: 'What is a Comment?',
        theory: 'A comment is text in a programs code, script, or another file that is not meant to be seen by the user running the program. However, is seen when viewing the source code. Comments help make code easier to understand by explaining what is happening and help prevent portions of a program from executing',
        procedure: "Read the input string Check whether the string is starting with '/' and check next character is' /' or'*'. If condition satisfies print comment .Else not a comment."

    },
    lexicalanalyzer: {
        link: 'lexicalanalyzer',
        aim: 'Design a lexical analyzer for given language and the lexical analyzer should ignore redundant spaces, tabs and new lines. It should also ignore comments. Although the syntax specification states that identifiers can be arbitrarily long, you may restrict the length to some reasonable value. Simulate the same in C language',
        programName: 'Lexical Anlyser',
        title: 'Lexical Anlysis',
        description: 'Design a lexical analyzer for given language and the lexical analyzer should ignore redundant spaces, tabs and new lines.',
        theory: 'A comment is text in a programs code, script, or another file that is not meant to be seen by the user running the program. However, is seen when viewing the source code. Comments help make code easier to understand by explaining what is happening and help prevent portions of a program from executing',
        procedure: "1. Read the input Expression         2. Check whether input is alphabet or digits then store it as identifier        3. If the input is is operator store it as symbol        4. Check the input for keywords"


    },
    checkidentifier: {
        link: 'checkidentifier',
        aim: 'To design an online simulator that checks whether a user input string is a valid identifier or not.',
        programName: 'Check Identifier',
        title: 'Check Identifier',
        description: 'Given a string as user input, representing a string, the task is to check if the string is a valid identifier or not. In order to qualify as a valid identifier',
        theory: "Given a string as user input, representing a string, the task is to check if the string is a valid identifier or not. In order to qualify as a valid identifier",
        procedure: "the string must satisfy all the following conditions: It must start with either ('_', '$') or any of the characters from the ranges ['a', 'z'] and ['A', 'Z']  There must not be any white space in the string All the subsequent characters after the first character must not consist of any special characters except '$'. The string must not exceed 31 characters",
    },
    operator: {
        link: 'operator',
        aim: 'Write a C program to simulate lexical analyzer for validating operators.',
        programName: 'Valid operator',
        title: 'Valid operator',
        description: 'Read the given input.If the given input matches with any operator symbol. Then display in terms of words of the particular symbol.Else print not a operator.',
        theory: "Read the given input.If the given input matches with any operator symbol. Then display in terms of words of the particular symbol.Else print not a operator.",
        procedure: "Read the given input.If the given input matches with any operator symbol. Then display in terms of words of the particular symbol.Else print not a operator.",
    },
    parsetree: {
        link: 'parsetree',
        aim: 'Write a C program for constructing of LL (1) parsing.',
        programName: 'LL1 Parser',
        title: 'LL1 Parser',
        description: 'Read the input string.Using predictive parsing table parse the given input using stack .       If stack [i] matches with token input string pop the token else shift it repeat the process until it reaches to $.',
        theory: "Read the input string.Using predictive parsing table parse the given input using stack .       If stack [i] matches with token input string pop the token else shift it repeat the process until it reaches to $.",
        procedure: "Read the input string.Using predictive parsing table parse the given input using stack .       If stack [i] matches with token input string pop the token else shift it repeat the process until it reaches to $.",
    },


}

export default programs
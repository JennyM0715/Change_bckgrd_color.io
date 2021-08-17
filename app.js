/*function random_bg_color_change() {*/
    const random_bg_color_change = () => { 

        /* RGB has 3 values rgb(red, green, blue) */
        /*       - each range from 0 - 255 */
    
        /* Math.floor
            - returns the largest integer less than or equal to a given number.
        */
    
        /* Math.random() * 256  
        
            - returns values from 0 -255 
            
        */
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
    
        /* gets the random values and sets them up for the rgb */
        var bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    
        /* write the rgb values in the console */
        console.log(bgColor);
      
        /* 
            The backgroundColor property sets or returns the background color of an element.
            
            syntax: 
                [object].style.backgroundColor
    
        */
       /*
        Set a background color for a document
       */
      /* HTML DOM 
        - document.body property represents the <body>
      */
        /*document.body.style.background = bgColor;*/
        document.body.style.backgroundColor = bgColor;
    }
    
    random_bg_color_change();
    
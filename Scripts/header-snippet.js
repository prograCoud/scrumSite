function includeHeaderSnippet() {

    // Traverse the collection of all
    // HTML elements
    id = document.getElementsByTagName("*");
    for (i = 0; i < id.length; i++) {
        element = id[i];

        // Search for elements with
        // specific attributes
        file = element.getAttribute(
            "header-snippet");

        if (file) {
              
            // Create an HTTP request with 
            // the attribute value as the
            // file name
            xmlRequest = new XMLHttpRequest();
            xmlRequest.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { 
                        element.innerHTML = this.responseText; 
                    }
                      
                    if (this.status == 404) { 
                        element.innerHTML = "Page not found."; 
                    }
                      
                    // Delete the attribute and
                    // call this function again.
                    element.removeAttribute(
                        "header-snippet");

                    includeHeaderSnippet();
                }
            }
            xmlRequest.open("GET", file, true);
            xmlRequest.send();
            return; // Exit function.
        }
    }
};

function includeSubHeaderSnippet() {

    // Traverse the collection of all
    // HTML elements
    id = document.getElementsByTagName("*");
    for (i = 0; i < id.length; i++) {
        element = id[i];

        // Search for elements with
        // specific attributes
        file = element.getAttribute(
            "sub-header-snippet");

        if (file) {
              
            // Create an HTTP request with 
            // the attribute value as the
            // file name
            xmlRequest = new XMLHttpRequest();
            xmlRequest.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { 
                        element.innerHTML = this.responseText; 
                    }
                      
                    if (this.status == 404) { 
                        element.innerHTML = "Page not found."; 
                    }
                      
                    // Delete the attribute and
                    // call this function again.
                    element.removeAttribute(
                        "sub-header-snippet");

                    includeSubHeaderSnippet();
                }
            }
            xmlRequest.open("GET", file, true);
            xmlRequest.send();
            return; // Exit function.
        }
    }
};
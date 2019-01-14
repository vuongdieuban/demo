var app = angular.module('app', ['angularjs-gauge']);

app.controller("infoController", ($scope) => {
    /*Assume $scope.info is the data (JSON) returned by API after being deserialized  */
    $scope.info = {
        username: '16@test.com',
        categories: [
            { name: "Product", unit: "%", value: 27, max: 100 },
            { name: "Runaway", unit: "months", value: 3, max: 24 },
            { name: "Conversion", unit: "%", value: 24, max: 100 },
            { name: "Engagement", unit: "%", value: 100, max: 100 },
        ]
    }

    /*The below code assume that if the backend API does not return colour, so we need to compute and add into the object ourselves. 
    If the API returns colour then we don't need to do the below step and just use the colour directly */
    let categories = $scope.info.categories;
    for (let i = 0; i < categories.length; i++) {
        let percent = categories[i].value / categories[i].max * 100
        if (percent < 20) {
            categories[i].color = "#FF0000";
        }
        else if (percent > 20 && percent < 70) {
            categories[i].color = "#ffa500 ";
        }
        else {
            categories[i].color = "#00ff00 ";
        }
    };
});


app.controller("profileController", ($scope) => {
    $scope.targets = [
        { name: "Market", description: "Fill in who are your customers?" },
        { name: "Pain", description: "What is the pain statement that you are trying to solve for them?" },
        { name: "Benefit", description: "What is the benefit that will match that pain statement?" },
    ];
});

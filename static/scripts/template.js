const dialogue = "Hey there [!yellow!kid]! Pick up the [!blue!phone]!~[!blue!Phone] [!blue!phone] [!blue!phone]."
fillContent(dialogue, "templateContent");
fillImage("/static/assets/stockphoto.jpg", "basicTemplateImage1", "Cutest Cat");
fillImage("/static/assets/stockphoto.jpg", "basicTemplateImage2", "Cutest Cat");
fillImage("/static/assets/stockphoto.jpg", "basicTemplateImage3", "Cutest Cat");
// fillImage("/static/assets/stockphoto.jpg", "basicTemplateImage4", "Cutest Cat");
setTitle("Cutest Dog", "basicTemplateImage3");
setTitle("Cutest Rabbit", "basicTemplateImage1");
audio("/static/assets/flamingo.mp3");
setState("interactable", "basicTemplateDiv3", function() {simpleCat()});
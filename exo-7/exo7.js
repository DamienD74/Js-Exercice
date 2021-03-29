console.log("exo-7");

console.log(jsonDatas);

var traduction =
    {
        car : "voiture",
        house : "maison",
        game : "jeux",
        videoGame : "jeuxvidéo",
        show : "concert"
    }

for (var data of jsonDatas)
{
    if (data.type == "car")
    {
        data.type = traduction.car;
    }
    else if (data.type == "house")
    {
        data.type = traduction.house;
    }
    else if (data.type == "game")
    {
        data.type = traduction.game;
    }
    else if (data.type == "videoGame")
    {
        data.type = traduction.videoGame;
    }
    else if (data.type == "show")
    {
        data.type = traduction.show;
    }
    console.log(data);
}
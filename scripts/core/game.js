function Game()
{
  this.clear = function()
  {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  }

  this.save = function()
  {
    this.clear();

    console.info("Saving..");

    var h = {};

    localStorage.character = oquonie.player.id;
    localStorage.room = oquonie.stage.room.id;

    localStorage.ramen_necomedre = oquonie.spellbook.has_ramen("necomedre");
    localStorage.ramen_nephtaline = oquonie.spellbook.has_ramen("nephtaline");
    localStorage.ramen_neomine = oquonie.spellbook.has_ramen("neomine");
    localStorage.ramen_nestorine = oquonie.spellbook.has_ramen("nestorine");
    localStorage.ramen_nemedique = oquonie.spellbook.has_ramen("nemedique");
    localStorage.ramen_nastazie = oquonie.spellbook.has_ramen("nastazie");

    localStorage.pillar_necomedre = oquonie.spellbook.has_pillar("necomedre");
    localStorage.pillar_nephtaline = oquonie.spellbook.has_pillar("nephtaline");
    localStorage.pillar_neomine = oquonie.spellbook.has_pillar("neomine");
    localStorage.pillar_nestorine = oquonie.spellbook.has_pillar("nestorine");
    localStorage.pillar_nemedique = oquonie.spellbook.has_pillar("nemedique");
    localStorage.pillar_nastazie = oquonie.spellbook.has_pillar("nastazie");

    return h;
  }

  this.load = function()
  {
    console.info("Loading..");

    oquonie.player.id = localStorage.character;
    oquonie.player.location = localStorage.room;

    if(localStorage.ramen_necomedre){ oquonie.spellbook.add_ramen("necomedre")}
    if(localStorage.ramen_nephtaline){ oquonie.spellbook.add_ramen("nephtaline")}
    if(localStorage.ramen_neomine){ oquonie.spellbook.add_ramen("neomine")}
    if(localStorage.ramen_nestorine){ oquonie.spellbook.add_ramen("nestorine")}
    if(localStorage.ramen_nemedique){ oquonie.spellbook.add_ramen("nemedique")}
    if(localStorage.ramen_nastazie){ oquonie.spellbook.add_ramen("nastazie")}

    if(localStorage.pillar_necomedre){ oquonie.spellbook.has_pillar("necomedre")}
    if(localStorage.pillar_nephtaline){ oquonie.spellbook.has_pillar("nephtaline")}
    if(localStorage.pillar_neomine){ oquonie.spellbook.has_pillar("neomine")}
    if(localStorage.pillar_nestorine){ oquonie.spellbook.has_pillar("nestorine")}
    if(localStorage.pillar_nemedique){ oquonie.spellbook.has_pillar("nemedique")}
    if(localStorage.pillar_nastazie){ oquonie.spellbook.has_pillar("nastazie")}

  }

  this.is_found = function()
  {
    if(localStorage.character){
      return true;
    }
    return false;
  }

  this.new = function()
  {
    console.info("New Game..");
    this.clear();

    oquonie.player.location = 29;
    oquonie.player.id = "necomedre";

    return "Created a new game.";
  }
}
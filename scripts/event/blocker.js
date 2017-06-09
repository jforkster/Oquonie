function Blocker(x,y,id)
{
  Event.call(this,"blocker");

  this.x = x;
  this.y = y;
  this.id = id;

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.music.play_effect("bump.1");
  }

  this.update(20);

  if(this.id != 0){ oquonie.artbook.set_art(this.element,"media/graphics/blocker/"+this.id+".png"); }
}

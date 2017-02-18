function Owl(x,y)
{
  Event.call(this,"owl");

  this.x = x;
  this.y = y;

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    oquonie.dialog.show(this,["letter","letter","letter"]);
  }

  this.on_sight = function()
  {
    // save
  }

  var bg = "url(media/graphics/event.owl.1.png)";

  var p = this.position_at(x,y,100);
  var top = p[0];
  var left = p[1];
  var zIndex = p[2];

  this.element.setAttribute("style","background-image:"+bg+"; left:"+left+"; top:"+top+";z-index:"+zIndex);
}
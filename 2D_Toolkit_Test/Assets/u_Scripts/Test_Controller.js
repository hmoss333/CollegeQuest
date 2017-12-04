enum FacingState { Up, Down, Left, Right, Idle }
var facing : FacingState;
var lastFacing : FacingState;
var speed : float = 0.25f;
var anim : tk2dAnimatedSprite;
var wait : boolean;
anim = GetComponent(tk2dAnimatedSprite);

function Start () {

}

function Update () 
{
	var vertical : float = Input.GetAxis("Vertical");
	var horizontal : float = Input.GetAxis("Horizontal");
	
	if (wait == true)
	{
		WaitForSeconds(20);
		wait = false;
	}

	if (vertical >= 0.5f) 
	{
  		facing = FacingState.Up;
		lastFacing = facing;
	}

  	else if (horizontal <= -0.5) 
	{
  		facing = FacingState.Right;
		lastFacing = facing;
	}

  	else if (vertical <= -0.5)
	{ 
  		facing = FacingState.Down;
		lastFacing = facing;
	}

  	else if (horizontal >= 0.5)
	{ 
  		facing = FacingState.Left;
		lastFacing = facing;
	}
	
	else
		facing = FacingState.Idle;

	controller();
}

function controller()
{
switch (facing) {
case FacingState.Up: 
   	if (anim.Playing && anim.CurrentClip.name == "Walk_Up")
        anim.Play("Walk_Up");
	else if(!anim.Playing)
      	anim.Play("Walk_Up");
    transform.Translate(0,0,speed * Time.deltaTime,Space.World);
    break;

case FacingState.Down:
	if (anim.Playing && anim.CurrentClip.name == "Walk_Forward")
        anim.Play("Walk_Forward");
	else if(!anim.Playing)
        anim.Play("Walk_Forward");
    transform.Translate(0,0,-speed * Time.deltaTime,Space.World);
    break;

case FacingState.Left:
	if (anim.Playing && anim.CurrentClip.name == "Walk_Left")
        anim.Play("Walk_Left");
	else if(!anim.Playing)
        anim.Play("Walk_Left");
	transform.Translate(-speed * Time.deltaTime,0,0,Space.World);
	break;

case FacingState.Right:
 	if (anim.Playing && anim.CurrentClip.name == "Walk_Right")
        anim.Play("Walk_Right");
	else if(!anim.Playing)
        anim.Play("Walk_Right");
    transform.Translate(speed * Time.deltaTime,0,0,Space.World);
    break;

case FacingState.Idle:
	changeToIdle();
	break;
	}
}

function changeToIdle()
{
	switch(lastFacing)
	{
  		case FacingState.Up:	
  			anim.Play("Up_Idle");
			break;

		case FacingState.Right:	
  			anim.Play("Right_Idle");
			break;

		case FacingState.Left:	
  			anim.Play("Left_Idle");
			break;
  		
		case FacingState.Down:	
  			anim.Play("Forward_Idle");
			break;
	}
}

function OnTriggerEnter( other : Collider)
{
	if (other.gameObject.tag == "Event")
	{
		wait = true;
	}
	if (other.gameObject.tag == "SGuy")
	{
		wait = true;
//		anim.play("Up_Idle");
	}
}

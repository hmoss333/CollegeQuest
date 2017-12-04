#pragma strict
//var time : float;
var fadeTrigger : boolean;
public var otherScript : FadeInOut;
var fade : int = 16;


function Start () {

}

function Update () { 
     //var otherScript: FadeInOut = GetComponent(FadeInOut); 
     //otherScript.DoSomething(); 
}

function OnTriggerEnter( other : Collider )
{
	if (other.gameObject.tag == "Player")
	{
		yield WaitForSeconds(fade);
		otherScript.fadeOut();
		fadeTrigger = true;
	}
}
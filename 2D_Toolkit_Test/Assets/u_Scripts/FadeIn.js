#pragma strict
//var time : float;
var fadeTrigger : boolean;
public var otherScript : FadeInOut;


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
		otherScript.fadeIn();
		fadeTrigger = true;
	}
}
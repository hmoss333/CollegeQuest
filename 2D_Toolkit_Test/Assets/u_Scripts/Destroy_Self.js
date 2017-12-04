#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == "Player")
	{
    	Destroy(transform.parent.gameObject);
	}
}
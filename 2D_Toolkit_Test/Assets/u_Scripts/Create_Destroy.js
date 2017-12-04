#pragma strict

var prefab : Transform;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == "Player")
	{
		Instantiate (prefab, prefab.position, prefab.rotation);
    	Destroy(transform.parent.gameObject);
	}
}


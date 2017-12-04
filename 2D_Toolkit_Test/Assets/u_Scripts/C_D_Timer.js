#pragma strict
var prefab : Transform;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other: Collider){
  if (other.tag == "Player")
  {
  	Invoke("Move", 20);  
  }
}

function Move()
{
	Instantiate (prefab, prefab.position, prefab.rotation);
    Destroy(transform.parent.gameObject);
}
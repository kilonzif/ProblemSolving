
// create a Node, the building block of a LinkedList
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      let newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }


    //traverse a Linkedlist
     traverseLinkedList() {
        let currentNode = this.head;
        while (currentNode) {
          console.log(currentNode.data);
          currentNode = currentNode.next;
        }
      }

      //insert last
       addToLinkedList(linkedList, value) {
        let newNode = { data: value, next: null };
        if (!linkedList.head) {
          linkedList.head = newNode;
        } else {
          let current = linkedList.head;
          while (current.next) {
            current = current.next;
          }
          current.next = newNode;
        }
      }
      

    //Insert new node at an index 
     InsertToIndexLinkedList(linkedList, index, value) {
        let newNode = { data: value, next: null };
        if (!linkedList.head) {
          linkedList.head = newNode;
        } else if (index === 0) {
          newNode.next = linkedList.head;
          linkedList.head = newNode;
        } else {
          let current = linkedList.head;
          let currentIndex = 0;
          while (current.next && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
          }
          if (currentIndex === index - 1) {
            newNode.next = current.next;
            current.next = newNode;
          } else {
            console.log("Index out of bounds");
          }
        }
      }


      //insert first node
      insertFirstNode(linkedList, value) {
        let newNode = { data: value, next: null };
        newNode.next = linkedList.head;
        linkedList.head = newNode;
      }


      //insert last node
    insertLastNode(linkedList, value) {
        let newNode = { data: value, next: null };
        if (!linkedList.head) {
          linkedList.head = newNode;
        } else {
          let current = linkedList.head;
          while (current.next) {
            current = current.next;
          }
          current.next = newNode;
        }
      }
      

      //Get or Search for a Node at Index 
    getNodeAtIndex(linkedList, index) {
        if (!linkedList.head) {
          console.log("Linked list is empty");
        } else {
          let current = linkedList.head;
          let currentIndex = 0;
          while (current.next && currentIndex < index) {
            current = current.next;
            currentIndex++;
          }
          if (currentIndex === index) {
            console.log(current.data);
          } else {
            console.log("Index out of bounds");
          }
        }
      }
      
      //Remove at index
    removeNodeAtIndex(linkedList, index) {
        if (!linkedList.head) {
          console.log("Linked list is empty");
        } else if (index === 0) {
          linkedList.head = linkedList.head.next;
        } else {
          let current = linkedList.head;
          let currentIndex = 0;
          while (current.next && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
          }
          if (currentIndex === index - 1) {
            current.next = current.next.next;
          } else {
            console.log("Index out of bounds");
          }
        }
      }
      
      //Clear a LinkedList 
       clearLinkedList(linkedList) {
        linkedList.head = null;
      }
      



  }
  
  
  let list = new LinkedList(); //create a new instance of the LinkedList object 
  list.add(1);
  list.add(2);
  list.add(3);

  console.log(list);  //prints LinkedList as an object with Node [data, next] properties 

  list.traverseLinkedList();




  list.addToLinkedList(list,100);

  //add at index 2
  list.InsertToIndexLinkedList(list,2,50);

 

  //console.log(list.traverseLinkedList());
 
  list.removeNodeAtIndex(list,2);
   //retrieve 
console.log(list.getNodeAtIndex(list,2))

//delete/clear the entire linkedlist 
//list.clearLinkedList(list);
console.log("Traversing ...");
list.traverseLinkedList();

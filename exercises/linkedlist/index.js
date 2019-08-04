// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  insertFirst (data) {
    this.insertAt(data, 0)
  }

  size () {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }

    return counter
  }

  getFirst () {
    return this.getAt(0)
  }

  getLast () {
    return this.getAt(this.size() - 1)
  }

  clear () {
    this.head = null
  }

  removeFirst () {
    this.removeAt(0)
  }

  removeLast () {
    this.removeAt(this.size() - 1)
  }

  insertLast (data) {
    this.insertAt(data, this.size())
  }

  getAt (index) {

    if ( !this.head) {
      return null
    }

    let counter = 0
    let node = this.head

    while (node) {

      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }

    return node
  }

  removeAt (index) {

    if ( !this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    let prevNode = this.getAt(index - 1)

    if ( !prevNode || !prevNode.next) {
      return
    }

    prevNode.next = prevNode.next.next
  }

  insertAt (data, index) {

    if ( !this.head) {
      this.head = new Node(data)
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const prevNode = this.getAt(index - 1) || this.getLast()
    prevNode.next = new Node(data, prevNode.next)

  }

  forEach (fn) {
    let node = this.head
    let counter = 0

    while (node) {
      fn(node, counter)
      node = node.next
      counter++
    }
  }

  * [ Symbol.iterator ] () {
    let node = this.head

    while (node) {

      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList }

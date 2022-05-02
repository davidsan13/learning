
from ctypes import Structure
from queue import Empty


# Linked List Data Structure

class Node:
    def __init__(self, key = None, value=None):
        self.key = key
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def traverse(self):
        current = self.head
        while current is not None:
            print(current.data)
            current = current.next
    
    def size(self):
        current = self.head;
        count = 0;
        while current is not None:
            count += 1
            current = current.next
        return count

    def isEmpty(self):
        if self.head is None:
            return True
        return False

    def value_at(self, index):
        current = self.head
        while current is not None:
            if index == 0:
                return current.data
            index -=1
            current = current.next
    
    def front(self):
        current = self.head
        return current.data

    def push_front(self, value):
        newNode = Node(value)
        newNode.next = self.head
        self.head = newNode
    
    def push_back(self, key, value):

        current = self.head
        while current is not None:
            if current.next == None:
                newNode = Node(key, value)
                current.next = newNode
                return
            current = current.next

    def back(self):
         current = self.head
         while current is not None:
            if current.next == None:
                return current.value   
            current = current.next
 
    def insert(self,index, value):
        current = self.head
        
        if index == 0:
            self.push_front(value)
            return
        while current is not None:
            if index == 1:
                newNode = Node(value)
                newNode.next = current.next
                current.next = newNode
                return
            current = current.next
            index -=1
        return

    def erase(self,index):
        current = self.head
        if index == 0:
            self.head = current.next
            return
        while current is not None:
            if index == 0:
                temp.next = current.next
                return
            temp = current
            current = current.next
            index -= 1
        return

    def get(self, key):
        current = self.head
        while current is not None:
            if current.key == key:
                return current.value
            current = current.next
        return ("No Key Match")

    
    def value_n_from_end(self,n):



        # current = self.head
        # counter = 0
        # while current is not None:
        #     current = current.next
        #     counter += 1
        # position = abs(counter - n)
        # current = self.head
        # while current is not None:
        #     if position == 0:
        #         return current.data
        #     current = current.next
        #     position -= 1
        # return
        pointer1 = self.head
        pointer2 = self.head
        if n <= 0 or n > self.size():
            return None
        for i in range(n):
            pointer1 = pointer1.next
        
        while pointer1 is not None:
            pointer1 = pointer1.next
            pointer2 = pointer2.next
        return pointer2.data

    def reverse(self):
        temp = None
        current = self.head
        previous = current.next
        while current is not None:
            current.next = temp
            temp = current
            current = previous
            if previous is not None:
                previous = previous.next
        self.head = temp

    def remove_value(self, value):
        current = self.head
        p1 = self.head
        counter = 0
        while current is not None:
            if counter == 0 and current.data == value:
                self.head = current.next
                return
            if current.data == value:
                p1.next = current.next
                return
            p1 = current
            current = current.next
            counter = 1
        return None
# list1 = LinkedList()
# list1.head = Node("Mon")
# e2 = Node("Tue")
# e3 = Node("Wed")
# e4 = Node("Thurs")
# e5 = Node("Fri")
# e6 = Node("Sat")
# e7 = Node("Sun")
# list1.head.next = e2

# e2.next = e3
# e3.next = e4
# e4.next = e5
# e5.next = e6
# e6.next = e7

# # print(list1.traverse())
# print(list1.remove_value("Thurs"))
# print(list1.traverse())


# **************************************Queue Data Structure

class Queue:
    def __init__(self):
        self.front = None;
        self.back = None;
        self.size = 0;

    def dequeue(self):
        removeNode = self.front
        self.front = self.front.next
        self.size -= 1;

        return removeNode.data

    def enqueue(self, value):
        newNode = Node(value)
        if self.size == 0:
            self.front = newNode
            self.back = newNode 
        else:
            self.back.next = newNode
            self.back = newNode
        self.size +=1

    def empyt(self):
        if self.front == None:
            return True
        return False


# *************************************************
#
# Queue Input Data


# myQueue = Queue();
# myQueue.enqueue(4);
# myQueue.enqueue(5);
# myQueue.enqueue(6);
# myQueue.enqueue(1);
# myQueue.enqueue(2);
# print(myQueue.front.data)
# print(myQueue.back.data)
# myQueue.dequeue();
# print(myQueue.empyt())
# print(myQueue.front.data)


# *************************  Hash Data Structure *****************************************

class HashTable:
    def __init__(self):
        self.table = [None] * 10
        self.tableLength = len(self.table)

    def hash(self, key):
        hashValue = key % self.tableLength
        
        return hashValue
    
    def hashingt(self,hashValue):
        while self.table[hashValue] is not None and self.table[hashValue] != "Null" and hashValue < self.tableLength:
            hashValue += 1
        return hashValue

    def insert(self, key, value):
        # Linked List Implementation
        #Get Hash Value for Key
        hashValue = self.hash(key)
        currentNode = self.table[hashValue]
        if currentNode is None:
            headNode = LinkedList()
            headNode.head = Node(key,value)
            self.table[hashValue]= headNode
        else:
            currentNode = self.table[hashValue]
            currentNode.push_back(key,value)

        # Not Linked List
        # for i in value:
        #     hashValue = self.hash(i)
        #     if self.table[hashValue] is not None:
        #         hashValue = self.hashingt(hashValue)
        #     self.table[hashValue] = i

    def exist(self,value):
        hashValue = self.hash(value)
        while hashValue >= self.tableLength:
            if self.table[hashValue] == value:
                return True
            hashValue +=1
        return False
        
        # if self.table[hashValue] != value:
        #     hashValue = self.hashingt(hashValue)
        #     if hashValue == False:
        #         return False
        # else:
        #     return True

    def get(self,key):
        #Hashtable with Linked List
        hashValue = self.hash(key)
        currentNode  = self.table[hashValue]
        if currentNode is None:
            return False
        else:
           return currentNode.get(key)
        

    def remove(self,key):
        valueRemove = self.table[key]
        self.table[key] = "Null"
        return valueRemove

# table = HashTable()
# table.insert(10, 14)
# table.insert(20, 34)
# print(table.table)
# print(table.table[0].size())
# print(table.get(30))
# print(table.exist(80))
# print(table.get(2))
# print(table.remove(2))
# print(table.table)
# table.insert([80])
# print(table.table)
# # # print(13 %10)
# print(20 != "Null" or None != None)



def maxProfit(prices):
    highestValue = 0
    day = 0
    currentValue = 0
    stockDict = {}
    for i in range(len(prices)):
        for j in range(i,len(prices)):
            currentValue = prices[j] - prices[i]
            if currentValue > highestValue:
                highestValue = currentValue
                day = j +1
        stockDict[prices[i]]= [day, highestValue]
        highestValue = 0
        day = 0
        currentValue=0
    return stockDict

day = [7,1,5,3,6,4]

a = maxProfit(day)

value = 0
day = 0
for key, value in a.items():
    profit = value.pop(1)
    if profit > value:
        value = value[1]
        day = value[0]
print(day, value)
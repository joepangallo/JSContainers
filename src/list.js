"use strict";

// Allows different types
function List(type)
{  
    if ( typeof(type) === 'undefined') {console.log("undefined");return;}
	
    if (!(this instanceof List)) 
	{
        return new List(type);
    }
	
	var values = { length : 0, type : typeof(type) };  
	
    this.getLength = function() 
	{
		return values.length;
	}
		
	this.getValues = function()
	{	    
		return values;
	}
	
	this.clearValues = function()
	{
		values = {};		
	}	
}



// Create an array of 'n' values of 'value'.
function createArray(n, value)
{    
    if( typeof n !== "number" )
	{	    
		return;
	}
	
	var arr = new Array(n);		
	for( var i = 0; i < n; ++i)
	{
		arr[i] = n;
	}
	
	return arr;
}

// Insert element at index i
List.prototype.insert = function(i,element)
{   
	Array.prototype.splice.call( this.getValues(), i , 0 , element);
	// console.log( this.getValues() );
}

// Fill the list with 'n' elements of 'value'
List.prototype.assignFill = function(n,value)
{   
    if( typeof value !== this.getValues().type ) 
	{	    
		return typeof value;
	}
  
    var size = this.getLength();
		
	for( var i = 0; i < n; ++i)
	{	    
		this.insert( size++, value );
	}
	
	//console.log(this.getValues() );
};

// Return reference to last element
List.prototype.back = function()
{
    var list = this;
	
	return list.getValues()[ list.getLength() - 1 ];
}

// Clear the list
List.prototype.clear = function()
{
	this.clearValues();
}

// Check if the list is empty.
List.prototype.empty = function()
{
	return this.getLength() === 0;
}

// Remove the element at a specific position.
List.prototype.erasePosition = function(pos)
{
    if( typeof pos !== "number" )
	{	    
		return;
	}
		 
	Array.prototype.splice.call( this.getValues(), pos, 1 );
	 
	// console.log( this.getValues() );
}

// Remove the elements occupying a range of positions.
List.prototype.eraseRange = function(start,end)
{
	if( typeof start !== "number" )
	{	    
		return;
	}
		 
	Array.prototype.splice.call( this.getValues(), start-1, end - start );	
}

// Remove the last element
List.prototype.pop_back = function()
{			 
	Array.prototype.pop.call(this.getValues() );	
}

// Remove the first element
List.prototype.pop_front = function()
{			 
	Array.prototype.shift.call(this.getValues() );	
}

// Add element at the end.
List.prototype.push_back = function(value)
{			 
	Array.prototype.push.call(this.getValues(), value );		
	// console.log( this.getValues() );
}

// Add element at the front.
List.prototype.push_front = function()
{			 
	Array.prototype.unshift.call(this.getValues() );	
}

// Fill the list with 'n' elements of 'value'
List.prototype.assign = function(list)
{   
    var size    = this.getLength();
	var counter = size;
		
	for( var i = 0; i < counter; ++i)
	{	    
		this.insert( size++, list.getValues()[i] );
	}	
}

// Merge two Lists.
List.prototype.merge = function(list)
{			 
    this.assign( list );	
}

// Remove a given value.
List.prototype.remove = function(value)
{	
	var ind = Array.prototype.indexOf.call( this.getValues(), value );
	
	if( ind !== -1 )
	{
		Array.prototype.splice.call( this.getValues(), ind, 1 );
	}
	
	// console.log( this.getValues() );
}

// Remove a given value.
List.prototype.removeIf = function(fcn)
{	
	if( typeof fcn !== "function") return;
	
	Array.prototype.filter.call( this.getValues(), fcn );
}

// Reverse the list.
List.prototype.reverse = function()
{	
	Array.prototype.reverse.call( this.getValues() );
}

// Return the list size.
List.prototype.size = function()
{	
	return this.getLength();
}

// Sort the list.
List.prototype.sort = function()
{	
    Array.prototype.sort.call( this.getValues() );
}

// Remove all adjacent duplicates.
// List must be sorted.
List.prototype.unique = function()
{	
    this.sort();
	
	Array.prototype.forEach.call( this.getValues() , 
	                            function(ele,ind,arr) 
								{
									if( arr[ind] === arr[ind + 1 ] )
									{
										this.erasePosition( ind );
										console.log(this.getValues() );
									}
								} ,this );
}

List.prototype.copyArray = function(ele, ind, arr) 
{
	this.insert(ind,arr[ind] );
}

// Swap lists.
List.prototype.swap = function(list)
{
      var tmp =  List();
	  
	  // Copy this into tmp
	  Array.prototype.forEach.call(this.getValues() ,this.copyArray, tmp );
	 
	  this.clear();
	
	  // Copy vector into this
	  Array.prototype.forEach.call(list.getValues() , this.copyArray, this );
		  
	  list.clear();	  
	  
	  // Copy tmp into vector. tmp is the original value of 'this'.
	  Array.prototype.forEach.call(tmp.getValues() , this.copyArray, vector );
		  
	  console.log( this.getValues() );
	  console.log( list.getValues() );
}


List.prototype.splice = function(list) 
{
	this.assign(list);
}

exports.List = List;







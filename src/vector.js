"use strict";

function Vector(type) 
{   
    if (!(this instanceof Vector)) 
	{
        return new Vector(type);
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

Vector.prototype.get = function(key) 
{    
    return this.has(key) ? this.getValues()[key] : undefined;
};

// Remove by key
Vector.prototype.remove = function(key) 
{
    Array.prototype.splice.call( this.getValues(), key, 1 );	
};

// Remove by value
Vector.prototype.removeValue = function(value) 
{
    var index = Array.prototype.indexOf.call( this.getValues(), value );	
    
	if( index !== - 1)
	{
		this.remove(index);
	}
};

Vector.prototype.assign = function(count, value) 
{      
   var cnt = ( this.getLength() > 0 ? this.getLength()  : 0 );   
   
   for( var i = 0; i < count; ++i)
   {    			
		this.insert(cnt++,value);
   }
};

// Get element at the given position.
Vector.prototype.at = function(position) 
{
   if( position > this.getLength() ) return undefined;
   
   return this.getValues()[position - 1];
};

// Return last element
Vector.prototype.back = function() 
{    
   return this.getValues()[this.getLength() - 1];
};


// Return first element
Vector.prototype.front = function() 
{    
   return this.getValues()[0];
};


// Clear all elements
Vector.prototype.clear = function() 
{    
   this.clearValues();
};

// Clear all elements
Vector.prototype.empty = function() 
{    
	return this.getLength() === 0;
}

// Clear all elements
Vector.prototype.erase = function() 
{    
	this.clearValues();
}

// Clear a range of elements
Vector.prototype.eraseRange = function(first,last) 
{    
    var i = (last - first) - 1;
	Array.prototype.splice.call( this.getValues(), first, i );
}

// Insert at specified position
Vector.prototype.insert = function(index,value) 
{       
    Array.prototype.splice.call( this.getValues(), index, 0,  value );
}

// Insert a range of values( array ) starting at index.
Vector.prototype.insertRange = function(start,end,arr) 
{  	
	var cnt = 0;
	
	for( var i = start-1; i < end; ++i)
	{	    
		this.insert(i,arr[cnt++] );
	}	
}

// Remove last element
Vector.prototype.pop_back = function() 
{  	
	Array.prototype.pop.call(this.getValues() );
		
}

// Add back
Vector.prototype.push_back = function(value) 
{  	    
	Array.prototype.push.call(this.getValues() , value );		
}

// Return the size
Vector.prototype.size = function() 
{  	    
	return this.getLength();
}

Vector.prototype.copyArray = function(ele, ind, arr) 
{
	this.insert(ind,arr[ind] );
}

// Swap values.
Vector.prototype.swap = function(vector) 
{  	    
	  
	  var tmp =  Vector();
	  
	  // Copy this into tmp
	  Array.prototype.forEach.call(this.getValues() ,this.copyArray, tmp );
	 
	  this.clear();
	
	  // Copy vector into this
	  Array.prototype.forEach.call(vector.getValues() , this.copyArray, this );
		  
	  vector.clear();	  
	  
	  // Copy tmp into vector. tmp is the original value of 'this'.
	  Array.prototype.forEach.call(tmp.getValues() , this.copyArray, vector );
	  
}


exports.Vector = Vector;
















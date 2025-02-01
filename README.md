# MongoDB $inc Operator Error with String Value

This repository demonstrates an uncommon error encountered when using the `$inc` operator in MongoDB update operations. The error occurs when attempting to increment a field whose value is a string instead of a number.

## Bug Description
The bug arises from the incorrect usage of the `$inc` operator. The `$inc` operator is designed to increment numerical values.  Attempting to increment a string value results in a MongoDB error.

## Bug Solution
The solution involves ensuring that the field being incremented is of numerical type. This can be achieved by either initializing the field with a numerical value or using a proper type conversion if needed before the update operation.

## How to Reproduce
1. Clone the repository.
2. Ensure a MongoDB instance is running.
3. Run `bug.js` to see the error.
4. Run `bugSolution.js` to see the correct implementation.

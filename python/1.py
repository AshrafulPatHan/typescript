# python3 1.py
print("Hello, World!")

# function
def hello(): 
    print("hello")

# if else
def condition(a):
    if(a>5):
        print("the number is larger then 5")
    else:
        print("the number is smaller then 5")


# if elif
def ifelse(a):
    if not isinstance(a, (int, float)):
        print("not a number")
    elif a>4:
        print("the number is bigger then 4")
    elif a<6:
        print("the number is smaller then 6")
    print("what is the number")

ifelse(2)


# loop 

for x in range(6):
    print("hello world")

i = 1
while i < 6:
    print(i)
    i += 1

for x in range(2):
    print(x)

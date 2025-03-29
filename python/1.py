# python3 1.py
print("Hello, World!")

def hello(): 
    print("hello")

def condition(a):
    if(a>5):
        print("the number is larger then 5")
    print("the number is smaller then 5")

def ifelse(a):
    if not isinstance(a, (int, float)):
        print("not a number")
    elif a>4:
        print("the number is bigger then 4")
    elif a<6:
        print("the number is smaller then 6")
    print("what is the number")

ifelse(2)
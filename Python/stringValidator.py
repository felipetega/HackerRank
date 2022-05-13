if __name__ == '__main__':
    s = input()
#1
    c=0
    while c<len(s):
        if s[c].isalnum:
            print(True)
            break
        else:
            c+=1
            if c==len(s):
                print(False)
#2        
    c=0
    while c<len(s):
        if s[c].isalpha:
            print(True)
            break
        else:
            c+=1
            if c==len(s):
                print(False)
#3        
    c=0
    while c<len(s):
        if s[c].isdigit:
            print(True)
            break
        else:
            c+=1
            if c==len(s):
                print(False)
#4        
    c=0
    while c<len(s):
        if s[c].islower:
            print(True)
            break
        else:
            c+=1
            if c==len(s):
                print(False)
#5
    c=0
    while c<len(s):
        if s[c].isupper:
            print(True)
            break
        else:
            c+=1
            if c==len(s):
                print(False)
    
      
   
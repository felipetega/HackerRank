if __name__ == '__main__':
    lista=[]
    for _ in range(int(input())):
        name = input()
        score = float(input())
        lista.append([name,score])
    second_lowest = sorted(set([score for name, score in lista]))[1]
    print('\n'.join(sorted([name for name, score in lista if score == second_lowest])))


def arrCharLength(arr: list[str]):
    count = 0;
    for word in arr:
        count = count + len(word)

    return count

arr_of_words = ['a', 'bc', 'd'] # -> a= 1 , b=2, c=3, d=4
arr_char_len_of_arr = arrCharLength(arr=arr_of_words)

arr_words_2 = ['x', 'xy', 'y', 'z']
arr_words_2_char_length = arrCharLength(arr=arr_words_2)

print(arr_char_len_of_arr)
print(arr_words_2_char_length)
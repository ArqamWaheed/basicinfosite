def validParentheses(s):
    st=Stack()
    if s=="":
        return True
    for i in s:
        if i in '([{':
            st.push(i)
        elif i==']':
            if st.isEmpty():
                return False
            open_bracket=st.pop()
            if open_bracket!="[":
                return False 
        elif i=='}':
            if st.isEmpty():
                return False
            open_bracket=st.pop()
            if open_bracket!="{":
                return False
        elif i==')':
            if st.isEmpty():
                return False
            open_bracket=st.pop()
            if open_bracket!="(":
                return False
    return st.isEmpty()
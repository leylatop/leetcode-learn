const deleteDuplicates = function(head) {
    if(!head || !head.next) return head
    let cur = head
    while(cur && cur.next) {
        if(cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
};

let head = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    }
}
console.log(deleteDuplicates(head));

// 解题思路：单指针移动
// 1. 判断当前节点值与下一节点值是否相等，若相等，则将指针后移2步；
// 2. 若不相等，则将指针后移1步；
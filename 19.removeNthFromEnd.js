/*
 * @Author: your name
 * @Date: 2021-11-12 00:14:26
 * @LastEditTime: 2021-11-12 01:06:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode-learn\19.delete.js
 */
var removeNthFromEnd = function(head, n) {
    if(!head || n <= 0) return null
    // 只有一个节点
    if(!head.next && n == 1) return null 

    // 有且有多个节点
    let leng = 1    // 节点长度
    let cur = head
    while(cur.next) {
        leng++
        cur = cur.next
    }

    if(leng == n) return head.next

    // 获取被删除节点的位置
    let num = leng - n - 1
    cur = head
    for(let i = 0; i< num; i++) {
        cur = cur.next
    }

    // 截取和拼接
    let newNode = cur.next.next
    cur.next = newNode
    return head
};

var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    // 让快指针先走n步
    for(let i = 0; i< n; i++) {
        fast = fast.next
    }
    // 处理n等于链表长度的情况
    if(!fast) return head.next
    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }

    // 此时fast走到了链表的最后一个节点，slow和fast差n个
    // 将slow的next指向下下个
    slow.next = slow.next.next;
    return head
};
var head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: null
                    }
                }
            }
        }
    }
}

console.log(removeNthFromEnd(head, 3));

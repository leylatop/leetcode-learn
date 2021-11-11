/*
 * @Author: your name
 * @Date: 2021-11-11 23:22:39
 * @LastEditTime: 2021-11-12 00:16:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode-learn\24.js
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head
    let dummyHead = {val: 0, next: null}
    dummyHead.next = head
    let cur = dummyHead
    while (cur.next && cur.next.next) {
        let node1 = cur.next // 第二个节点
        let node2 = node1.next   // 第三个节点
        cur.next = node2
        node1.next = node2.next
        node2.next = node1
        cur = node1
    }

    return dummyHead.next

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

console.log(swapPairs(head));
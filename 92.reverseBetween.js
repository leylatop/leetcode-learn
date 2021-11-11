/*
 * @Author: your name
 * @Date: 2021-11-09 20:59:53
 * @LastEditTime: 2021-11-09 22:10:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode-learn\92.js
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseBetween = function (head, left, right) {
    if (!head || !head.next || left > right) return head

    const dummy_node = new ListNode(-1);
    dummy_node.next = head;

    let pre = dummy_node;
    for (let i = 0; i < left - 1; ++i) {
        pre = pre.next;
    }
    let cur = pre.next;
    for (let i = 0; i < right - left; ++i) {
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy_node.next;
};

var head = {
    val: 3,
    next: {
        val: 5,
        next: null
    }
}
// var head = {
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 5,
//                     next: {
//                         val: 6,
//                         next: {

//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

console.log(reverseBetween(head, 1, 2));


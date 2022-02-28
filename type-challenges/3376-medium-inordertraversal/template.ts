interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<
  T extends TreeNode | null,
  S extends TreeNode = NonNullable<T>
> = T extends null
  ? []
  : [...InorderTraversal<S['left']>, S['val'], ...InorderTraversal<S['right']>]

  // js解法
function inorderTraversal(target: TreeNode | null): number[] {
  if (!target) return []

  return [
    ...inorderTraversal(target.left),
    target.val,
    ...inorderTraversal(target.right),
  ]
}


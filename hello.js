<script src="node_modules/collect.js/build/collect.min.js"></script>
<script>
    const collection = collect([1, 2, 3, 4]);

    const filtered = collection.filter((value, key) => value > 2);

    filtered.all();

    console.log(filtered);



</script>
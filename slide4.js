function showDescription(type, element) {
    const descriptions = {
        external: `
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>External Regulation</td>
                            <td>Motivation driven by external rewards or avoiding punishment.</td>
                            <td>A student studies hard to get good grades to avoid being punished by their parents.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        introjected: `
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Introjected Regulation</td>
                            <td>Motivation driven by internal pressures such as guilt or obligation.</td>
                            <td>A student attends all classes because they would feel guilty if they didn’t, even if they don’t enjoy the subject.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        identified: `
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Identified Regulation</td>
                            <td>Motivation driven by personal importance and values.</td>
                            <td>A student participates in a math course because they recognize that math skills are crucial for their future career in engineering.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        integrated: `
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Integrated Regulation</td>
                            <td>Motivation aligned with personal identity and values.</td>
                            <td>A student volunteers at a charity because they strongly believe in the cause and it reflects their personal values.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        intrinsic: `
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Intrinsic Motivation</td>
                            <td>Motivation driven by inherent enjoyment and interest in the activity.</td>
                            <td>A student plays the piano purely because they love making music and it brings them joy.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
    };

    // Remove 'active' class from all items
    const items = document.querySelectorAll('.continuum-item');
    items.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked item
    element.classList.add('active');

    // Update the description content
    document.getElementById("description").innerHTML = descriptions[type];
}

// Attach the click event listeners to the items after the slide is loaded
document.querySelectorAll('.continuum-item').forEach(item => {
    item.addEventListener('click', function() {
        showDescription(item.id, item);
    });
});
s
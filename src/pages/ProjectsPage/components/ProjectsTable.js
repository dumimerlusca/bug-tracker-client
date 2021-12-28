import React from "react";
import { Link } from "react-router-dom";

const ProjectsTable = ({ projects }) => {
	return (
		<table className='table table-striped mb-0'>
			<thead className='bg-primary text-white'>
				<tr className=''>
					<th>Project name</th>
					<th>Description</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{projects &&
					projects.map(project => {
						const { name, description, _id } = project;
						return (
							<tr className='' key={_id}>
								<td className='fs-5 fw-normal'>
									{name.length > 50 ? `${name.slice(0, 30)}...` : name}
								</td>
								<td className=''>
									{description.length > 50
										? `${description.slice(0, 50)}...`
										: description}
								</td>
								<td className=''>
									<ul className=''>
										<li>
											<Link
												className='btn btn-link'
												to={`/dashboard/projects/${_id}`}
											>
												Details
											</Link>
										</li>
									</ul>
								</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default ProjectsTable;
